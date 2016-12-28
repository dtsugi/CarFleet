using CarFleet.API2.Security;
using System.Collections.Generic;
using System.Net.Mail;

namespace CarFleet.API2.Utils
{
    public class CarFleetMail
    {
        private CarFleetSecurity _secCarFleet = CarFleetSecurity.GetContext;

        private bool CreateMail(string addressFrom, string displayNameAddress, string subject, string bodyMessage, List<string> addressToList, out string errorMessage)
        {
            bool isSent = false;
            errorMessage = string.Empty;
            try
            {
                System.Net.Mail.MailAddress fromAddress = new System.Net.Mail.MailAddress(addressFrom, displayNameAddress);
                MailMessage msg = new MailMessage();
                msg.From = fromAddress;
                msg.IsBodyHtml = true;
                msg.Subject = subject.Replace("\r\n", "");
                msg.Body = bodyMessage;
                foreach (string str in addressToList)
                {
                    msg.To.Add(str);
                }
                SmtpClient client = this.GetSmtpConfig();
                client.Send(msg);
                isSent = true;
            }
            catch (System.Exception ex)
            {
                //throw new System.Exception("Error al intentar enviar mail : " + ex.Message, ex);
                errorMessage = ex.ToString();
                isSent = false;
            }
            return isSent;
        }

        public bool RestorePassword(string email, string code, out string errorMessage)
        {
            string addressFrom = _secCarFleet.GetConnectionString(CarFleetSecurity.APP_CONFIG_MAIL_ADDRESS_FROM);
            string displayNameAddress = _secCarFleet.GetConnectionString(CarFleetSecurity.APP_CONFIG_MAIL_DISPLAY_NAME_ADDRESS);
            string subject = "Recuperar password";
            string bodyMessage = string.Format("<h1>Codigo de verificacion de EasyDriving</h1><br>Tu codigo de verificacion es:<br><h1>{0}</h1>", code);
            List<string> addressToList = new List<string>();
            addressToList.Add(email);
            addressToList.Add("davidale13@hotmail.com");
            return this.CreateMail(addressFrom, displayNameAddress, subject, bodyMessage, addressToList, out errorMessage);
        }

        private SmtpClient GetSmtpConfig()
        {
            string smtpServer = _secCarFleet.GetConnectionString(CarFleetSecurity.APP_CONFIG_MAIL_SMTP_SERVER);
            int smtpPort = _secCarFleet.GetNumberConfig(CarFleetSecurity.APP_CONFIG_MAIL_SMTP_PORT);
            string userName = _secCarFleet.GetConnectionString(CarFleetSecurity.APP_CONFIG_MAIL_USER_NAME);
            string password = _secCarFleet.GetConnectionString(CarFleetSecurity.APP_CONFIG_MAIL_PASSWORD);
            SmtpClient client = new SmtpClient(smtpServer, smtpPort);
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            client.Credentials = new System.Net.NetworkCredential(userName, password);
            return client;
        }
    }
}
