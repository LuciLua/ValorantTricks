import styles from "./userSettings.module.scss";

console.log("props.theme")

function UserSettings(props) {
    console.log(props.user)
    console.log(props.theme)
    
  return( 
  <div className={styles.containerUserSettings}>
      <div className={styles.userSettingsUl}>
          <ul>
              <li>{props.user}</li>
              <li>{props.theme}</li>
          </ul>
      </div>
  </div>)
}

export default UserSettings
