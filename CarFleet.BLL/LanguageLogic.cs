using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class LanguageLogic
    {
        private LanguageCrud _LanguageCrud = new LanguageCrud();

        public LanguageEntity GetById(int id)
        {
            return _LanguageCrud.SelectById(id);
        }

        public List<LanguageEntity> SelectAll()
        {
            return _LanguageCrud.SelectAll();
        }
    }
}
