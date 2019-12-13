import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Dialog from '../src/components/Dialog/Dialog';

export default {
  title: 'components|Dialog',
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [withKnobs],
};

export const dialog = () => {
  const title = text('title', 'Something Success');
  const description = text('description', 'Your Something is done.');
  const visible = boolean('visible', true);
  const confirmText = text('confirmText', 'Yes');
  const cancelText = text('cancelText', 'Nope');
  const cancellable = boolean('cancellable', false);

  return (
    <Dialog
      title={title}
      description={description}
      visible={visible}
      confirmText={confirmText}
      cancelText={cancelText}
      cancellable={cancellable}
    />
  );
};

dialog.story = {
  name: 'Default',
};

export const cancellable = () => {
  return (
    <Dialog
      title="Delete Post"
      description="Are you sure about removing the post?"
      visible={true}
      confirmText="Yes"
      cancellable
    />
  );
};

export const customContent = () => {
  return (
    <Dialog visible={true} hideButtons>
      Custom Content
    </Dialog>
  );
};
