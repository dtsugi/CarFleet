using System;
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

        //public abstract T SelectById(int id);

        protected IEnumerable<T> ToList(IDbCommand command, bool isFKCall = false)
        {
            using (var reader = command.ExecuteReader(CommandBehavior.Default))
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

        protected bool HasValueRecord(IDataRecord record, string columnName)
        {
            try
            {
                int index = record.GetOrdinal(columnName);
                return (index >= 0 && record[index] != DBNull.Value);
            }
            catch (IndexOutOfRangeException)
            {
                return false;
            }
        }

        protected object GetValueRecord(object recordObject, Utils.Constants.DATA_TYPES returnDataType)
        {
            object returnObject;
            if (recordObject != DBNull.Value)
            {
                switch (returnDataType)
                {
                    case Utils.Constants.DATA_TYPES.DATETIME:
                        if (!Utils.Utilities._IsCasteable(recordObject.ToString(), out returnObject, Utils.Constants.DATA_TYPES.DATETIME))
                        {
                            Utils.Log.LoggerBase._Log(string.Format("The recordObject {0} is not a valid DATETIME", recordObject.ToString()), this.GetType());
                        }
                        break;
                    case Utils.Constants.DATA_TYPES.DOUBLE:
                        if (!Utils.Utilities._IsCasteable(recordObject.ToString(), out returnObject, Utils.Constants.DATA_TYPES.DOUBLE))
                        {
                            Utils.Log.LoggerBase._Log(string.Format("The recordObject {0} is not a valid DOUBLE", recordObject.ToString()), this.GetType());
                        }
                        break;
                    case Utils.Constants.DATA_TYPES.FLOAT:
                        if (!Utils.Utilities._IsCasteable(recordObject.ToString(), out returnObject, Utils.Constants.DATA_TYPES.FLOAT))
                        {
                            Utils.Log.LoggerBase._Log(string.Format("The recordObject {0} is not a valid FLOAT", recordObject.ToString()), this.GetType());
                        }
                        break;
                    case Utils.Constants.DATA_TYPES.INT:
                        if (!Utils.Utilities._IsCasteable(recordObject.ToString(), out returnObject, Utils.Constants.DATA_TYPES.INT))
                        {
                            Utils.Log.LoggerBase._Log(string.Format("The recordObject {0} is not a valid INT", recordObject.ToString()), this.GetType());
                        }
                        break;
                    case Utils.Constants.DATA_TYPES.BIGINT:
                        if (!Utils.Utilities._IsCasteable(recordObject.ToString(), out returnObject, Utils.Constants.DATA_TYPES.BIGINT))
                        {
                            Utils.Log.LoggerBase._Log(string.Format("The recordObject {0} is not a valid BIGINT", recordObject.ToString()), this.GetType());
                        }
                        break;
                    case Utils.Constants.DATA_TYPES.VARCHAR:
                    case Utils.Constants.DATA_TYPES.NVARCHAR:
                        returnObject = recordObject.ToString();
                        break;
                    case Utils.Constants.DATA_TYPES.BIT:
                        if (!Utils.Utilities._IsCasteable(recordObject.ToString(), out returnObject, Utils.Constants.DATA_TYPES.BIT))
                        {
                            Utils.Log.LoggerBase._Log(string.Format("The recordObject {0} is not a valid BIT", recordObject.ToString()), this.GetType());
                        }
                        break;
                }
                return recordObject;
            }
            else
                return null;
        }
    }
}
