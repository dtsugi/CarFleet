using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;

namespace CarFleet.API2.Security
{
    public class CarFleetSecurity
    {
        public const string APP_CONFIG_TIME_EXPIRE_SESSION = "TimeExpireSession";
        public const string APP_CONFIG_RESTORE_PASSWORD_TIME_EXPIRE = "RestorePasswordTimeExpire";
        public const string APP_CONFIG_MAIL_ADDRESS_FROM = "MailAddressFrom";
        public const string APP_CONFIG_MAIL_DISPLAY_NAME_ADDRESS = "MailDisplayNameAddress";
        public const string APP_CONFIG_MAIL_SMTP_SERVER = "MailSmtpServer";
        public const string APP_CONFIG_MAIL_SMTP_PORT = "MailSmtpPort";
        public const string APP_CONFIG_MAIL_USER_NAME = "MailUserName";
        public const string APP_CONFIG_MAIL_PASSWORD = "MailPassword";

        private static CarFleetSecurity _Context = null;

        public int GetTimeExpireSession()
        {
            return this.GetNumberConfig(APP_CONFIG_TIME_EXPIRE_SESSION);
        }

        public int GetNumberConfig(string keyName)
        {
            var numberAppConfig = this.GetConnectionString(keyName);
            int value = 0;
            bool isValidNumber = int.TryParse(numberAppConfig, out value);
            if (isValidNumber)
                return value;
            else
                return 0;
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

        public HttpResponseMessage ReturnResponseUnauthenticated(HttpRequestMessage request)
        {
            return request.CreateResponse(HttpStatusCode.Unauthorized, false);
        }

        public static CarFleetSecurity GetContext
        {
            get
            {
                if (_Context == null)
                    _Context = new CarFleetSecurity();
                return _Context;
            }
        }
    }
}