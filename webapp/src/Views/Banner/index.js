import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import Button from '@material-ui/core/Button';
import { Link as LinkRouter} from "react-router-dom";
import Link from '@material-ui/core/Link';

let cx = classNames.bind(styles);

class Banner extends Component {


    componentDidMount() {

    }
    render() {
        return(
        <div className={cx('align_centre')}>
            <div className={cx('banner_top')}>
                <Button><Link component={LinkRouter} to="/info"> What is trash arts?</Link></Button>
                <Button>Who are we?</Button>
                <Button>Events</Button>
                <Button>The Festival</Button>
            </div>
        </div>
        );
    }
}


export default Banner;