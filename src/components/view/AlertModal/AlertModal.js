/* eslint-disable linebreak-style */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapActions, getIsAlertModalVisible } from '../../../reducers';

export const BareAlertModal = ({
  isAlertModalVisible,
  close,
  warning,
}) => (
  <div>
    <Dialog
      open={isAlertModalVisible}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Input is missing!'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {warning}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
                        Close
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

BareAlertModal.propTypes = {
  warning: PropTypes.string,
  isAlertModalVisible: PropTypes.bool,
  close: PropTypes.func,
};

const mapStateToProps = (store) => ({
  isAlertModalVisible: getIsAlertModalVisible(store),
});

const withRedux = connect(mapStateToProps, { ...mapActions });

export default compose(withRedux)(BareAlertModal);
