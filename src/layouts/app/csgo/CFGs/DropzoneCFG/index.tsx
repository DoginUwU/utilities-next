import { Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import React from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const DropzoneCFG: React.FC = () => {
    return (
        <Dropzone onDrop={() => {}}>
            {(status) => (
                <div style={{ pointerEvents: 'none' }}>
                    <Group position="center">
                        <AiOutlineCloudDownload size={50} />
                    </Group>
                </div>
            )}
        </Dropzone>
    );
};

export default DropzoneCFG;
