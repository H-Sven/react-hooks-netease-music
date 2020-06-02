import React, { useState } from 'react'
import { connect } from 'umi'
import styles from './index.less'
import { Avatar, Button, Select, Input } from 'antd'

const vinyl = [
  { id: 1, unitPrice: 16, totalPrice: 16, time: 1, type: 'common' },
  { id: 2, unitPrice: 15, totalPrice: 45, time: 3, type: 'common' },
  { id: 3, unitPrice: 13.16, totalPrice: 158, time: 12, type: 'common' }
]
const music = [
  { id: 1, unitPrice: 8, totalPrice: 8, time: 1, type: 'recommend' },
  { id: 2, unitPrice: 8, totalPrice: 8, time: 1, type: 'common' },
  { id: 3, unitPrice: 8, totalPrice: 24, time: 3, type: 'common' },
  {id: 4, unitPrice: 7.33, totalPrice: 88, time: 12, type: 'common' }
]

const Member = (props:any) => {
  const { user } = props
  const { Option } = Select
  const { Search } = Input
  const [tabTye, setTabTye] = useState<number>(1)
  const [productList, setProductList] = useState<any>(vinyl)
  const [selectItem, setSelectItem] = useState<any>(vinyl[0])
  const [discountType, setDiscountType] = useState<number>(1)
  const [discountList, setDiscountList] = useState<any>([])
  
  const handlerType = (type:number, list: Array<any>) => {
    setTabTye(type)
    setSelectItem(list[0])
    setProductList(list)
  }
  const select = (item:any) => {
    setSelectItem(item)
  }
  const handleChange = (value:string) => {
    console.log(value)
  }
  const onSearch = (value:string) => {
    console.log(value)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <Avatar shape="square" src={user.userInfo.profile.avatarUrl} />
          <div className={styles.left}>
            <div className={styles.nickname}>
              {user.userInfo.profile.nickname}
              <img className={styles.brand_tag} src="//p1.music.126.net/Ql_LwFQnWAI4XHeuZ348_Q==/109951163709499910.png" alt=""/>
            </div>
            <div className={styles.action}>
              <Button>买会员增好友</Button>
              <Button>使用兑换码</Button>
            </div>
          </div>
        </div>
        <div className={styles.vipcashier_card}>
          <ul className={styles.vipcashier_header_tab}>
            <li onClick={() => handlerType(1, vinyl)} className={ tabTye === 1 ? styles.active : ''}>黑胶VIP</li>
            <li onClick={() => handlerType(2, music)} className={ tabTye === 2 ? styles.active : ''}>音乐包</li>
          </ul>
          <ul className={styles.vipcashier_product_list}>
            {productList.map(item => {
              return (
                <li onClick={() => select(item)} key={item.id} className={`${styles.product_item} ${selectItem.id === item.id && styles.active}`}>
                  <div className={styles.total_price}>
                    <span>{item.totalPrice}</span>
                    {item.type === 'recommend' ? '元/月' : `元`}
                  </div>
                  <div className={styles.unit_price}>
                    {item.time !== 1 ? `${item.unitPrice}元/月` : item.type === 'recommend' ? '可随时取消' : ''}
                  </div>
                  <div className={styles.time}>
                    {item.type === 'recommend' ? '连续包月' : `${item.time}个月`}
                  </div>
                  {item.type === 'recommend' && <span className={styles.recommend}>推荐</span>}
                </li>
              )
            })}
          </ul>
          <div className={styles.discount}>
            <div className={styles.label}>
              <span>选择优惠券</span>
              <Button onClick={() => setDiscountType(discountType === 1 ? 2 : 1)} type="link">{ discountType === 1 ? '兑换优惠券' : '取消兑换优惠券'}</Button>
            </div>
            {discountType === 1 &&
              <Select size="large" style={{ width: 300 }} onChange={handleChange} placeholder="该套餐无可使用的优惠券" notFoundContent="无可用优惠券">
                {discountList.map(item => {
                  return (
                    <Option key={item.value} value={item.value}>{item.label}</Option>
                  )
                })}
              </Select>
            }
            {discountType === 2 &&
              <Search onSearch={onSearch} placeholder="请输入优惠券兑换码" style={{ width: 300 }} enterButton="兑换" size="large" />
            }
          </div>
          <div className={styles.payment}>
            <div className={styles.title}>支付方式</div>
            <div className={styles.payment_type}>
              <div className={styles.qrcode}>此处展示二维码</div>
              <div className={styles.payment_info}>
                <p>使用微信、支付宝扫码支付</p>
                <p><span>{selectItem.totalPrice}</span>元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state:any) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Member)