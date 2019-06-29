import React, { Component } from 'react';
import { Consumer } from '../../../context';

import classes from '../Upgrade.module.sass';
class SuccessState extends Component {
  state = { checked: false };
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  changeStep = (dispatch, e) => {
    e.preventDefault();
    const { checked } = this.state;
    if (!checked) {
      return;
    }
    dispatch({ type: 'STEP', payload: 'userRegister' });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, apiUrl } = value;
          return (
            <form
              onSubmit={this.changeStep.bind(this, dispatch)}
              className={`${classes.registerForm}`}
            >
              <div className={`${classes.agreementWrapper}`}>
                <div className={`${classes.steps}`}>
                  <span className={`${classes.stepPointer}`} />
                  <span className={`${classes.stepPointer}`} />
                  <span className={`${classes.stepPointer}`} />
                </div>
                <div className={`${classes.bgTop}`} />
                <header
                  className={`${classes.agreementHeader} text-center mb-3 mt-3`}
                >
                  <h6>توافق نامه</h6>
                </header>
                <div className={`${classes.agreementContent} text-right`}>
                  <p>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                      وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </p>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                      وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                      از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                      متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                      برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                      هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و
                      سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
                      می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
                      رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                      فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                      دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
                      رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و
                      جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                      استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی
                      نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                      چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                      لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                      متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                      در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                      متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
                      طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                      زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                      تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                      پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و
                      جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                      استفاده قرار گیرد.
                    </p>
                  </p>
                </div>
                <p
                  className={`mt-3 text-right pr-2 d-none d-sm-block`}
                  style={{ fontSize: '.6rem' }}
                >
                  برای ثبت درخواست نیاز به طی نمودن مراحل گام به گام زیر است
                  لطفا صبورانه اطلاعات درخواست شده را وارد نمایید
                </p>
                <div className={`row mb-3`}>
                  <div
                    className={`col-sm-8 col-12 ${
                      classes.agreementChecked
                    } text-right`}
                  >
                    <input
                      className={`mr-1`}
                      type="checkbox"
                      id="aggreement"
                      name="aggreement"
                      checked={this.state.checked}
                      onChange={this.handleCheckboxChange}
                    />
                    <label className={`mr-2`} for="aggreement">
                      توافق نامه را مطالعه کرده و با آن موافقم.
                    </label>
                  </div>
                  <div
                    className={`col-sm-4 col-12 ${
                      classes.agreementBtnWrapper
                    } ${classes.btnWrapper}`}
                  >
                    <input
                      type="submit"
                      value="گام بعدی"
                      className={`btn ${classes.btnForm}`}
                    />
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Consumer>
    );
  }
}
export default SuccessState;