using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class UserLogic
    {
        private UserCrud _UserCrud = new UserCrud();

        public UserEntity Login(string loginName)
        {
            return _UserCrud.Login(loginName);
        }

        public void UpdateLanguage(int idUser, int idLanguage)
        {
            _UserCrud.UpdateLanguage(idUser, idLanguage);
        }
    }
}
