import { useModal } from 'react-modal-hook';

import { DeleteModal, DeleteModalProps } from '../ui/components/DeleteModal';

export interface UseDeleteModalProps extends Omit<DeleteModalProps, 'onClose' | 'open'> {}

export const useDeleteModal = ({ ...props }: UseDeleteModalProps) => {
  const [showModal, hideModal] = useModal(() => <DeleteModal open onClose={hideModal} {...props} />, [props]);

  return [showModal, hideModal];
};
