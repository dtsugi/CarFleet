using System;

namespace CarFleet.Utils.Log
{
    public class LoggerBase
    {
        public static void _Log(string message, Type objectType)
        {
            throw new Exception(string.Format("MESSAGE:{0} \n LOCATION:{1}", message, objectType.FullName));
        }

        public static void _Log(Exception exception, Type objectType)
        {
            var str = exception.ToString();
            throw new Exception(string.Format("MESSAGE:{0} \n STACK TRACE:{1} \nLOCATION:{1}", exception.Message, exception.StackTrace, objectType.FullName));
        }
    }
}
