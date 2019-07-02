import React, { Component } from 'react';
import Popover from 'react-tiny-popover';
import Select from 'react-select';
import { Consumer } from '../../../context';
import Loading from '../../../layout/Loading';
import classes from './SelectTypeReport.module.sass';
class SelectTypeReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        { value: 'courses', label: 'درس', id: 0 },
        { value: 'users', label: 'کاربر', id: 1 },
        { value: 'teachers', label: 'مربی', id: 2 },
        { value: 'coupons', label: 'کوپن', id: 3 },
        { value: 'audits', label: 'بازرسی سیستم', id: 4 }
      ],
      courseFilters: [],
      courseFilter: '',
      selectedOption: ''
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleOpenModal = () => {
    this.setState({ isPopoverOpen: true });
  };

  handleSubmit = (dispatch, typeReports, e) => {
    const { selectedOption, isPopoverOpen } = this.state;
    typeReports.push(selectedOption);
    dispatch({ type: 'TYPEREPORT', payload: typeReports });
    this.setState({ isPopoverOpen: false, selectedOption: '' });
  };
  render() {
    const { isPopoverOpen, selectedOption, filters } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch, typeReports } = value;
          return (
            <Popover
              isOpen={isPopoverOpen}
              position={'center'} // preferred position
              content={
                <div className={`${classes.overlay}`}>
                  <div className={`${classes.modal}`}>
                    <div className={`${classes.header}`}>
                      <h5 className={`${classes.headerContent}`}>
                        انتخاب نوع فیلتر
                      </h5>
                      <button
                        className={`btn float-left ${classes.closeBtn}`}
                        onClick={() => this.setState({ isPopoverOpen: false })}
                      >
                        x
                      </button>
                    </div>
                    <form
                      onSubmit={this.handleSubmit.bind(
                        this,
                        dispatch,
                        typeReports
                      )}
                    >
                      <div>
                        <div className={`row form-group`}>
                          <div className={`col-6 text-right mt-1`}>
                            <label>نوع فیلتر خود را انتخاب کنید:</label>
                          </div>
                          <div className={`col-6`}>
                            <Select
                              value={selectedOption}
                              onChange={this.handleChange}
                              options={filters}
                              rtl={true}
                              classNamePrefix="aparnik"
                              className={`aparnik_multiSelect`}
                              placeholder="نوع فیلتر را انتخاب کنید"
                            />
                          </div>
                        </div>

                        <div className={`${classes.btnWrapper}`}>
                          <input
                            type="submit"
                            value="اعمال فیلتر"
                            className={`btn ${classes.createApp}`}
                          />
                          <Loading class="input" show={this.state.loading} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              }
            >
              <div onClick={() => this.setState({ isPopoverOpen: false })} />
            </Popover>
          );
        }}
      </Consumer>
    );
  }
}

const props = {};

export default SelectTypeReport;
