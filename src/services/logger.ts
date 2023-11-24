import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const getLogger = (fileName = "applicaton") => {
  const fileLogTransport = new DailyRotateFile({
    filename: `logs/${fileName}-%DATE%.log`,
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
  });

  const consoleTransport = new winston.transports.Console({
    level: "info",
    handleExceptions: false,
    format: winston.format.printf((i) => `${i.message}`),
  });

  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "my-app" },
    transports: [consoleTransport],
  });

  if (process.env.NODE_ENV === "development") {
    logger.add(fileLogTransport);
  }

  return logger;
};

export default getLogger();
