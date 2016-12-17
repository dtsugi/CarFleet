﻿using System;
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
        public const string stp_UserLogin = "stp_UserLogin";
        public const string stp_UserUpdateLanguage = "stp_UserUpdateLanguage";
        public const string stp_UserFleetSelectByUserId = "stp_UserFleetSelectByUserId";
        public const string stp_FleetSelectByCompanyId = "stp_FleetSelectByCompanyId";
        public const string stp_VehicleSelectByCompanyId = "stp_VehicleSelectByCompanyId";
        public const string stp_VehicleSelectByFleetId = "stp_VehicleSelectByFleetId";
        public const string stp_DriverSelectByCompanyId = "stp_DriverSelectByCompanyId";
        public const string stp_ConfigTagSelect = "stp_ConfigTagSelect";
        public const string stp_ConfigTagInsert = "stp_ConfigTagInsert";
        public const string stp_SelectConfigTagLanguageByPageName = "stp_SelectConfigTagLanguageByPageName";
        public const string stp_ConfigTagLanguageSelectByLanguage = "stp_ConfigTagLanguageSelectByLanguage";
        public const string stp_ConfigTagLanguageInsert = "stp_ConfigTagLanguageInsert";
        public const string stp_ConfigTagLanguageUpdate = "stp_ConfigTagLanguageUpdate";
    }
}
