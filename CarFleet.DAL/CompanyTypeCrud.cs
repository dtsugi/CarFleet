using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;

namespace CarFleet.DAL
{
    public class CompanyTypeCrud : CrudEntityBase<CompanyTypeEntity>
    {
        public override void Map(IDataRecord record, CompanyTypeEntity entity)
        {
            entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT);
            if (base.HasValueRecord(record["company_category"])) { entity.Company_category = (string)base.GetValueRecord(record["company_category"], Utils.Constants.DATA_TYPES.NVARCHAR); }
        }

        public List<CompanyTypeEntity> Select(int? id)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.CommandText = "stp_CompanyTypeSelect";
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }
    }
}



