using System;
using System.Data;
using System.Data.SqlClient;

namespace CarFleet.Std
{
    public static class ICommandExtend
    {
        public static void AddParameter(this IDbCommand command, string name, object value)
        {
            if (command == null) throw new ArgumentNullException("command");
            if (name == null) throw new ArgumentNullException("name");

            var p = command.CreateParameter();
            p.ParameterName = name;
            p.Value = value ?? DBNull.Value;
            command.Parameters.Add(p);
        }

        public static void AddParameter(this IDbCommand command, string name, SqlDbType type, object value)
        {
            if (command == null) throw new ArgumentNullException("command");
            if (name == null) throw new ArgumentNullException("name");

            SqlParameter parametro = new SqlParameter(name, type);
            parametro.Value = value ?? DBNull.Value;
            command.Parameters.Add(parametro);
        }
    }
}