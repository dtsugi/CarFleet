using System;
using System.Data;
using System.Data.Common;
using CarFleet.Utils.Log;
using CarFleet.Utils.Config;

namespace CarFleet.Std
{
    public class ConnectionCarFleet
    {
        private readonly DbProviderFactory dbProviderFactory;
        public readonly string connectionString;
        private static ConnectionCarFleet _Context = null;

        public ConnectionCarFleet()
        {
            connectionString = GetConnectionString();
            dbProviderFactory = DbProviderFactories.GetFactory("System.Data.SqlClient");
        }

        private string GetConnectionString()
        {
            ConfigManager configManager = ConfigManager.GetContext;
            string tmpConnectionString = configManager.GetConnectionString(configManager.CarFleetConnectionString);
            if (string.IsNullOrEmpty(tmpConnectionString))
            {
                LoggerBase._Log(string.Format("Error obteniendo el connection string"), this.GetType());
            }
            return tmpConnectionString;
        }

        public IDbConnection Create()
        {
            try
            {
                var connection = dbProviderFactory.CreateConnection();
                if (connection == null)
                {
                    LoggerBase._Log(string.Format("Fallo al crear la conexion"), this.GetType());
                }
                connection.ConnectionString = connectionString;
                connection.Open();
                return connection;
            }
            catch (Exception ex)
            {
                LoggerBase._Log(ex, this.GetType());
                return null;
            }
        }

        public static ConnectionCarFleet GetContext
        {
            get
            {
                if (_Context == null)
                    _Context = new ConnectionCarFleet();
                return _Context;
            }
        }
    }
}
