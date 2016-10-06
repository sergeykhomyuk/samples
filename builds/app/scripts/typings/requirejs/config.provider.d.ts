interface ConfigProvider {
     getConfig(applicationUrl: string, libs: string): RequireConfig;
}