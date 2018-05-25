import CSSModules from 'react-css-modules'
import styles from '../styles/personal.css'
import {connect} from 'dva'
import router from 'umi/router'
import {Toast} from 'antd-mobile'

const UserInfo = ({...rest}) => {
    return (
        <div styleName="mod-userinfo">
            <div styleName="balance-wrap">
                <p>账户余额</p>
                <p style={{fontSize:'.4rem'}}>{rest.data.可用资金}</p>
            </div>
            <ul styleName="pay-wrap">
                <li onClick={() => {
                    if(rest.action){
                        router.push({pathname:'/payType'})
                    }else{
                        Toast.info('当前接口关闭')
                    }
                }} style={{paddingRight:'.15rem'}}>
                    <a href="javascript:;">充值</a>
                </li>
                <li onClick={() => {
                    if(rest.action){
                        router.push({pathname:'/withdraw'})
                    }else{
                        Toast.info('当前接口关闭')
                    }
                }} style={{paddingLeft:'.15rem'}}>
                    <a href="javascript:;">提现</a>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    data:state.personal.data,
    action:state.personal.action
})

const mapDispatchToProps = (dispatch,props) => ({})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(UserInfo, styles))

