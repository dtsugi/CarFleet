using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class DriverLogic
    {
        private DriverCrud _driverCrud = new DriverCrud();

        public List<DriverEntity> GetByCompanyId(int idCompany)
        {
            return _driverCrud.SelectByCompanyId(idCompany);
        }
    }
}
