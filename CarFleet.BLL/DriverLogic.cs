using CarFleet.DAL;
using CarFleet.Models;

namespace CarFleet.BLL
{
    public class DriverLogic
    {
        private DriverCrud _driverCrud = new DriverCrud();

        public DriverEntity GetById(int id)
        {
            return _driverCrud.SelectById(id);
        }
    }
}
