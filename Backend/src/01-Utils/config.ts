abstract class Config {
    public port: number;
    public mySql = { host: "", user: "", password: "", database: "" };
}

class DevelopmentConfig extends Config {
    public constructor() {
        super();
        this.port = 3001;
        this.mySql = { host: "localhost", user: "root", password: "", database: "Northwind" };
    }
}

class ProductionConfig extends Config {
    public constructor() {
        super();
        this.port = +process.env.PORT;
        this.mySql = { host: "eu-cdbr-west-02.cleardb.net", user: "ba090d2e34543c", password: "d6bb92eb", database: "heroku_1049ab3b5311c12" };
    }
}

const config = process.env.ENVIRONMENT === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
