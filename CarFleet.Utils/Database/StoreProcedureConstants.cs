using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFleet.Utils.Database
{
    public class StoreProcedureConstants
    {
        /* Language */
        public const string stp_LanguageSelect = "stp_LanguageSelect";
        /* User */
        public const string stp_UserLogin = "stp_UserLogin";
        public const string stp_UserUpdateLanguage = "stp_UserUpdateLanguage";
        public const string stp_UserFleetSelectByUserId = "stp_UserFleetSelectByUserId";
        public const string stp_UserSelectByLogin = "stp_UserSelectByLogin";
        public const string stp_UserUpdatePassword = "stp_UserUpdatePassword";
        /* Fleet */
        public const string stp_FleetSelectByCompanyId = "stp_FleetSelectByCompanyId";
        public const string stp_FleetTotalByCompanyId = "stp_FleetTotalByCompanyId";
        /* Vehicle */
        public const string stp_VehicleSelectByCompanyId = "stp_VehicleSelectByCompanyId";
        public const string stp_VehicleSelectByFleetId = "stp_VehicleSelectByFleetId";
        public const string stp_VehicleTotalByCompanyId = "stp_VehicleTotalByCompanyId";
        public const string stp_VehicleTotalByCompanyAndFleetId = "stp_VehicleTotalByCompanyAndFleetId";
        /* Driver */
        public const string stp_DriverSelectByCompanyId = "stp_DriverSelectByCompanyId";
        public const string stp_DriverTotalByCompanyId = "stp_DriverTotalByCompanyId";
        /* ConfigTag */
        public const string stp_ConfigTagSelect = "stp_ConfigTagSelect";
        public const string stp_ConfigTagInsert = "stp_ConfigTagInsert";
        /* ConfigTagLanguage */
        public const string stp_SelectConfigTagLanguageByPageName = "stp_SelectConfigTagLanguageByPageName";
        public const string stp_ConfigTagLanguageSelectByLanguage = "stp_ConfigTagLanguageSelectByLanguage";
        public const string stp_ConfigTagLanguageInsert = "stp_ConfigTagLanguageInsert";
        public const string stp_ConfigTagLanguageUpdate = "stp_ConfigTagLanguageUpdate";
        /* ConfigUserLogin */
        public const string stp_ConfigUserLoginInsert = "stp_ConfigUserLoginInsert";
        public const string stp_ConfigUserLoginSelectByUserTokenUUID = "stp_ConfigUserLoginSelectByUserTokenUUID";
        /* UserRestore */
        public const string stp_UserRestoreInsert = "stp_UserRestoreInsert";
        public const string stp_UserRestoreSelectByUserCode = "stp_UserRestoreSelectByUserCode";
    }
}
