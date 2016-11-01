using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;

namespace CarFleet.DAL
{
    public class DriverCrud : CrudEntityBase<DriverEntity>
    {
        public override void Map(IDataRecord record, DriverEntity entity)
        {
            entity.Id = (int)record["id"];
            entity.Name = record["name"].ToString();
            entity.Surname = record["surname"].ToString();
        }

        public override DriverEntity SelectById(int id)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("Id", SqlDbType.TinyInt, id);
                command.CommandText = "sp_DriverInsert";
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }
    }
}
