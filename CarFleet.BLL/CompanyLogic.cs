using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class CompanyLogic
    {
        private CompanyCrud _CompanyCrud = new CompanyCrud();

        public List<CompanyEntity> GetById(int? id, int? id_companytype, int? id_drivingrulesconfiguration, int? id_platform_service)
        {
            return _CompanyCrud.Select(id, id_companytype, id_drivingrulesconfiguration, id_platform_service);
        }
    }
}
