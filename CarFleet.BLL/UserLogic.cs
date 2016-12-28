using CarFleet.DAL;
using CarFleet.Models;
using CarFleet.Utils.Security;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class UserLogic
    {
        private UserCrud _UserCrud = new UserCrud();

        public UserEntity Login(string loginName, string password)
        {
            string passEncrypted = CarFleetSecurityCipher.Encrypt(password);
            return _UserCrud.Login(loginName, passEncrypted);
        }

        public void UpdateLanguage(int idUser, int idLanguage)
        {
            _UserCrud.UpdateLanguage(idUser, idLanguage);
        }

        public UserEntity SelectByLoginName(string loginName)
        {
            return _UserCrud.SelectByLoginName(loginName);
        }

        public bool UpdatePassword(string loginName, string password)
        {
            UserEntity userEntity = this.SelectByLoginName(loginName);
            if (userEntity != null)
            {
                string passEncrypted = CarFleetSecurityCipher.Encrypt(password);
                return _UserCrud.UpdatePassword(userEntity.Id, passEncrypted);
            }
            else
                return false;
        }
    }
}
