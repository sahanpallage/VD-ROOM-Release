import React from "react";
import { Modal } from "antd";

const CustomModal = (props) => {
  const { open, hideModal, title, performAction } = props;
  return (
    <Modal
      title="Confirm"
      open={open}
      onOk={performAction}
      onCancel={hideModal}
      okText="Yes"
      cancelText="Cancel"
      okButtonProps={{ danger: true }}
    >
      <p>{title}</p>
    </Modal>
  );
};

export default CustomModal;
