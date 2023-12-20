import React from 'react';
import classes from '../../components/HeaderComponent/styles.module.css';
import { faStar as fasFaStart } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStart } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Main = ({ link, setLink }) => {

    return (
        <div className={classes.main}>
            <div className={classes.item_box}>
                <div>
                    <Link onClick={() => {
                        setLink('https://img.freepik.com/premium-photo/wooden-bridge-in-blue-lake_104337-8600.jpg');
                    }} to='/posts'>
                        <img src="https://img.freepik.com/premium-photo/wooden-bridge-in-blue-lake_104337-8600.jpg" alt="" />
                    </Link>
                </div>

                <div>
                    <h2>
                        Photoshop - Web Deisgn
                    </h2>

                    <span className={classes.price}>
                        $290
                    </span>

                    <div>
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                        <FontAwesomeIcon icon={farFaStart} />
                        <span> 25 Reviews </span>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est minus nemo vitae architecto, recusandae blanditiis pariatur commodi quae natus!
                    </p>

                    <div className={classes.wrapper_box}>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <div className={classes.item_box}>
                <div>
                    <Link onClick={() => {
                        setLink('https://mirsg.ru/shared/upload/IMAGES/Directions/Island/Iceland%202023/dettifoss-6-wd-marked.jpg')
                    }} to="/posts">
                        <img src="https://mirsg.ru/shared/upload/IMAGES/Directions/Island/Iceland%202023/dettifoss-6-wd-marked.jpg" alt="" />
                    </Link>

                </div>

                <div>
                    <h2>
                        Photoshop - Web Deisgn
                    </h2>

                    <span className={classes.price}>
                        $290
                    </span>

                    <div>
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                        <FontAwesomeIcon icon={farFaStart} />
                        <span> 25 Reviews </span>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est minus nemo vitae architecto, recusandae blanditiis pariatur commodi quae natus!
                    </p>

                    <div className={classes.wrapper_box}>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <div className={classes.item_box}>
                <div>
                    <Link onClick={() => {
                        setLink('https://n1s1.hsmedia.ru/a0/17/09/a01709a2755d58288790e9dca754af8f/600x476_0xac120003_9744553971624420217.jpg')
                    }} to="/posts">
                        <img src="https://n1s1.hsmedia.ru/a0/17/09/a01709a2755d58288790e9dca754af8f/600x476_0xac120003_9744553971624420217.jpg" alt="" />
                    </Link>

                </div>

                <div>
                    <h2>
                        Photoshop - Web Deisgn
                    </h2>

                    <span className={classes.price}>
                        $290
                    </span>

                    <div>
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                        <FontAwesomeIcon icon={farFaStart} />
                        <span> 25 Reviews </span>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est minus nemo vitae architecto, recusandae blanditiis pariatur commodi quae natus!
                    </p>

                    <div className={classes.wrapper_box}>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>

                    </div>

                </div>
            </div>



        </div>
    );
}

export default Main;
