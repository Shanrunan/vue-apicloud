/**
 * Created by Administrator on 2017/11/3.
 */
window.BC_SDK = BCSDK_AppLink.init({
      appkey : '23082328', //必填，输入百川应用的appkey
      backURL: 'tbopen7663://', //必填，默认为空字符串，applink的tips的回跳url， 设置能在手机淘宝里面调回你自己应用的url，格式为`tbopen${appkey}`。

      openApp: true, //非必填，默认为true，非必填，是否唤起客户端，设置false，只会做H5跳转。
      linkKey: 'TB', //非必填，默认为TB, 唤起手淘(TB)/天猫(TM)。
      isNeedDownload: false, //非必填，默认为false, 没有app的情况下跳转目标h5页面还是下载页, 默认跳转目标h5页面。
      isDefaultRedirect: true, //选填, 没有唤起app的情况下是否默认跳转, 默认true。
      params:{}, //非必填，带给applink协议的扩展参数,用户自定义参数也传在这里, 如scm、pvid、pid、subpid、e、unionId等业务参数会放到这里。
      trackParams:{}, //非必填，ybhpss的映射对象，传入这里的参数会被拼为ybhpss字符串带到协议上。
      timeout: 1000 // 非必填，默认跳转(目标h5页/下载页)的延时时长。
    });

export default BC_SDK
