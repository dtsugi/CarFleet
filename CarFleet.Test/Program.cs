using CarFleet.BLL;
using CarFleet.DAL;
using CarFleet.Models;
using CarFleet.Utils.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFleet.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            LanguageLogic languageLogic = new LanguageLogic();
            UserLogic userLogic = new UserLogic();
            UserFleetLogic userFleetLogic = new UserFleetLogic();
            FleetLogic fleetLogic = new FleetLogic();
            VehicleLogic vehicleLogic = new VehicleLogic();
            DriverLogic driverLogic = new DriverLogic();
            ConfigTagLogic configTagLogic = new ConfigTagLogic();
            ConfigTagLanguageCrud configTagLanguageCrud = new ConfigTagLanguageCrud();
            FunctionsLogic functionsLogic = new FunctionsLogic();
            ConfigUserLoginLogic configUserLoginLogic = new ConfigUserLoginLogic();
            Mail mail = new Mail();
            UserRestoreLogic userRestoreLogic = new UserRestoreLogic();
            CarFleetSecurity secCarFleet = CarFleetSecurity.GetContext;

            //List<LanguageEntity> listLanguage = languageLogic.SelectAll();
            //LanguageEntity languageEntity = languageLogic.GetById(1);
            //UserEntity userEntity = userLogic.Login("ManuelM");
            //List<UserFleetEntity> listuserFleet = userFleetLogic.SelectByUserId(userEntity.Id);
            //List<FleetEntity> listFleet = fleetLogic.GetByCompanyId(userEntity.Id_company);
            //List<VehicleEntity> listVehicle = vehicleLogic.GetByCompanyId(userEntity.Id_company);
            //List<VehicleEntity> listVehicle2 = vehicleLogic.GetByFleetId(listFleet.FirstOrDefault().Id);
            //List<DriverEntity> listDriver = driverLogic.GetByCompanyId(userEntity.Id_company);
            //ConfigTagEntity configTagEntity=new ConfigTagEntity();
            //configTagEntity.Tag_key = "lblUser";
            //configTagEntity.Page_name = "Login";
            //configTagLogic.Insert(configTagEntity);
            //int totalDriver = functionsLogic.GetTotalsByCompanyId(2099, Utils.Constants.CARFLEET_ENTITY.DRIVER);
            //int totalFleet= functionsLogic.GetTotalsByCompanyId(2099, Utils.Constants.CARFLEET_ENTITY.FLEET);
            //int totalVehicle = functionsLogic.GetTotalsByCompanyId(2099, Utils.Constants.CARFLEET_ENTITY.VEHICLE);
            //string token=configUserLoginLogic.Insert(4188, "", 1800);

            string pass = CarFleetSecurityCipher.Encrypt("ManuelM");
            string passDecrypt = CarFleetSecurityCipher.Decrypt(pass);

            string email = "ManuelM";
            List<string> addressList = new List<string>();
            addressList.Add("davidale13@hotmail.com");

            string errorMessage;
            UserEntity userEntity = userLogic.SelectByLoginName(email);
            if (userEntity != null)
            {
                Random random = new Random();
                string code = random.Next(10000, 99999).ToString();
                int timeExpiration = secCarFleet.GetNumberConfig(CarFleetSecurity.APP_CONFIG_RESTORE_PASSWORD_TIME_EXPIRE);
                if (userRestoreLogic.Insert(userEntity.Id, code, timeExpiration))
                {
                    Mail carFleetMail = new Mail();
                    var sendMail = carFleetMail.RestorePassword("davidale13@hotmail.com", code, out errorMessage);
                }
                if (userRestoreLogic.IsValidCode(email, code, out errorMessage))
                {
                    string newPassword = "123456";
                    var updatePass = userLogic.UpdatePassword(email, newPassword);
                }
            }


            var f = 234;
        }
    }
}
