using CarFleet.DAL;
using CarFleet.Models;
using System;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class UserRestoreLogic
    {
        private UserRestoreCrud _UserRestoreCrud = new UserRestoreCrud();

        public bool Insert(int userId, string code, int timeExpiration)
        {

            UserRestoreEntity userRestoreEntity = new UserRestoreEntity();
            userRestoreEntity.IdUser = userId;
            userRestoreEntity.Code = code;
            userRestoreEntity.CreatedDate = DateTime.Now;
            userRestoreEntity.ExpirationDate = userRestoreEntity.CreatedDate.AddSeconds(timeExpiration);
            return (_UserRestoreCrud.Insert(userRestoreEntity));
        }

        public UserRestoreEntity SelectByUserIdCode(int idUser, string code)
        {
            return _UserRestoreCrud.SelectByUserIdCode(idUser, code);
        }

        public bool IsValidCode(string email, string code, out string errorMessage)
        {
            UserLogic userLogic = new UserLogic();
            UserEntity userEntity = userLogic.SelectByLoginName(email);
            bool isValidCode = false;
            errorMessage = string.Empty;
            if (userEntity != null)
            {
                UserRestoreEntity userRestoreEntity = this.SelectByUserIdCode(userEntity.Id, code);
                if (userRestoreEntity != null)
                {
                    /* Se valida que el codigo no haya expirado */
                    if (userRestoreEntity.ExpirationDate > DateTime.Now)
                    {
                        isValidCode = true;
                    }
                    else { errorMessage = "El codigo se encuentra vencido"; }
                }
                else { errorMessage = "Fallo en la autenticidad del codigo a la cuenta asociada"; }
            }
            else { errorMessage = "No existe ninguna cuenta con ese correo electronico"; }
            return isValidCode;
        }
    }
}
