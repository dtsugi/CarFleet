using System.Collections.Generic;
using System.Data;

namespace CarFleet.Std
{
    public abstract class CrudEntityBase<T> where T : new()
    {
        private ConnectionManager _ContextConnectionManager = null;

        public abstract void Map(IDataRecord record, T entity);

        //public virtual T Map(DataRow record)
        //{
        //    var retval = new T();
        //    this.Map(new DataRowAdapter(record), retval);
        //    return retval;
        //}

        public abstract T SelectById(int id);

        protected IEnumerable<T> ToList(IDbCommand command, bool isFKCall = false)
        {
            using (var reader = command.ExecuteReader(CommandBehavior.CloseConnection))
            {
                List<T> items = new List<T>();
                while (reader.Read())
                {
                    var item = new T();
                    Map(reader, item);
                    items.Add(item);
                }
                reader.Close();
                return items;
            }
        }

        protected ConnectionManager GetContextConnection
        {
            get
            {
                if (_ContextConnectionManager == null)
                    _ContextConnectionManager = new ConnectionManager();
                return _ContextConnectionManager;
            }
        }
    }
}
