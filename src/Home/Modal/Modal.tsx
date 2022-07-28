import { PlayCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import './styleModal.css'
interface Props {
  trailer: string;
  handleCancel: () => void;
}

const ModalPOpUp = ({ trailer, handleCancel }: Props) => {
  return (
    <Modal
      destroyOnClose={true}
      footer={null}
      width="1000px"
      // className={styles.ant-modal-header}
      title="Trailer"
      className="modalStyle"
      visible={!!trailer}
      onCancel={handleCancel}
    >
      <ReactPlayer controls={true} width={950} playing={true} url={trailer}></ReactPlayer>
    </Modal>
  );
};

export default ModalPOpUp;
