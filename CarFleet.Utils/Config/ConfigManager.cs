using System;
using System.Linq;
using System.Configuration;

namespace CarFleet.Utils.Config
{
    public class ConfigManager
    {
        public string CarFleetConnectionString { get; private set; }
        private static ConfigManager _Context = null;

        private ConfigManager()
        {
            this.CarFleetConnectionString = GetConnectionString(Utils.Constants.APP_CONFIG_CURRENT_CONNECTION_STRING);
        }

        public string GetConnectionString(string keyName)
        {
            if (ConfigurationManager.AppSettings.AllKeys.Contains(keyName))
            {
                return ConfigurationManager.AppSettings[keyName];
            }
            else
            {
                throw new Exception(string.Format("Error al obtener el ConnectionString del key {0}", keyName));
            }
        }

        public static ConfigManager GetContext
        {
            get
            {
                if (_Context == null)
                    _Context = new ConfigManager();
                return _Context;
            }
        }
    }
}
