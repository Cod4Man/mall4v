// cli3 会和配置文件合并
module.exports = {
  lintOnSave: false,
    configureWebpack: {
        resolve: {
            // extensions: [], // 省略后缀
            // 别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'router': '@/router'
            }
        }
    }
}
