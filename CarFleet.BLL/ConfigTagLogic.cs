using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class ConfigTagLogic
    {
        private ConfigTagCrud _ConfigTagCrud = new ConfigTagCrud();

        public List<ConfigTagEntity> SelectAll()
        {
            return _ConfigTagCrud.SelectAll();
        }

        public ConfigTagEntity SelectById(int id)
        {
            return _ConfigTagCrud.SelectById(id);
        }

        public bool Insert(ConfigTagEntity entity)
        {
            _ConfigTagCrud.Insert(entity);
            if (entity.Id > 0)
            {
                LanguageLogic _LanguageLogic = new LanguageLogic();
                ConfigTagLanguageLogic _ConfigTagLanguageLogic = new ConfigTagLanguageLogic();

                List<LanguageEntity> listLanguages = _LanguageLogic.SelectAll();
                if (listLanguages != null && listLanguages.Count > 0)
                {
                    foreach (LanguageEntity languageEntity in listLanguages)
                    {
                        ConfigTagLanguageEntity configTagLanguageEntity = new ConfigTagLanguageEntity();
                        configTagLanguageEntity.Id_configTag = entity.Id;
                        configTagLanguageEntity.Id_language = languageEntity.Id;
                        configTagLanguageEntity.Value_tag = string.Empty;
                        _ConfigTagLanguageLogic.Insert(configTagLanguageEntity);
                    }
                    return true;
                }
                else { return true; }
            }
            else { return false; }
        }
    }
}
