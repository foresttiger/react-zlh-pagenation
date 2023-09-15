import React, {Component, useState, memo} from 'react';
import styles from './index.less';
function Index() {
    return <div className={styles.fontBlue}>
        Text组件上传demo
    </div>
}

export default memo(Index);
