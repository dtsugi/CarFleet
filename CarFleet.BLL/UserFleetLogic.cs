using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class UserFleetLogic
    {
        private UserFleetCrud _UserFleetCrud = new UserFleetCrud();

        public List<UserFleetEntity> SelectByUserId(int idUser)
        {
            return _UserFleetCrud.SelectByUserId(idUser);
        }
    }
}
