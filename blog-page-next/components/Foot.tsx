import styles from './Foot.module.scss'

const Foot = () => {
  const year = new Date().getFullYear()

  const createDate = new Date(2022, 4, 22).getTime()
  const now = new Date().getTime()
  const passTime = Math.ceil((now - createDate) / (1000 * 3600 * 24))
  // const pastDays = moment().diff('2022-5-22', 'days')
  return (
    <div className={styles.footwrapper}>
      <div className={styles.content}>
        <p>
          {'> '}Copyright 2022-{year} Leo (Fan He).
        </p>
        <p>
          {'> '}本站已勉强运行{passTime}天
        </p>
      </div>
    </div>
  )
}

export { Foot }
