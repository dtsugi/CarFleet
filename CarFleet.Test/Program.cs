using CarFleet.BLL;
using CarFleet.DAL;
using CarFleet.Models;
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
            int totalDriver = functionsLogic.GetTotalsByCompanyId(2099, Utils.Constants.CARFLEET_ENTITY.DRIVER);
            int totalFleet= functionsLogic.GetTotalsByCompanyId(2099, Utils.Constants.CARFLEET_ENTITY.FLEET);
            int totalVehicle = functionsLogic.GetTotalsByCompanyId(2099, Utils.Constants.CARFLEET_ENTITY.VEHICLE);
            var f = 234;
        }
    }
}
