using System.Data;

namespace CarFleet.Std
{
    public class ConnectionManager
    {
        private static ConnectionManager _Context = null;

        public IDbCommand CreateCommand()
        {
            IDbConnection connection = this.CreateConnection();
            return connection.CreateCommand();
        }

        public IDbConnection CreateConnection()
        {
            ConnectionCarFleet connection = ConnectionCarFleet.GetContext;
            return connection.Create();
        }

        public static ConnectionManager GetContext
        {
            get
            {
                if (_Context == null)
                    _Context = new ConnectionManager();
                return _Context;
            }
        }
    }
}
