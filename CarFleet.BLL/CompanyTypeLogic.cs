using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class CompanyTypeLogic
    {
        private CompanyTypeCrud _CompanyTypeCrud = new CompanyTypeCrud();

        public List<CompanyTypeEntity> GetById(int? id)
        {
            return _CompanyTypeCrud.Select(id);
        }
    }
}
