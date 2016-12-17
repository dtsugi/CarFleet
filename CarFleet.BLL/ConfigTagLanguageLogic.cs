using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class ConfigTagLanguageLogic
    {
        private ConfigTagLanguageCrud _ConfigTagLanguageCrud = new ConfigTagLanguageCrud();

        public List<ConfigTagLanguageEntity> SelectByPageName(string pageName)
        {
            return _ConfigTagLanguageCrud.SelectByPageName(pageName);
        }

        public List<ConfigTagLanguageEntity> SelectByLanguage(int languageId)
        {
            return _ConfigTagLanguageCrud.SelectByLanguage(languageId);
        }

        public bool Insert(ConfigTagLanguageEntity entity)
        {
            _ConfigTagLanguageCrud.Insert(entity);
            return true;
        }

        public bool Update(ConfigTagLanguageEntity entity)
        {
            _ConfigTagLanguageCrud.Update(entity);
            return true;
        }
    }
}
