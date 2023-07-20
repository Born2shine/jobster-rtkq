import { toast } from 'react-toastify';

export const flashMessage = (type, message) => {
  switch (type) {
    case 'error':
        toast.dismiss();
        toast.error(message)
        break;
    case 'warning':
        toast.dismiss();
        toast.warning( message)
        break;
    case 'info':
        toast.dismiss();
        toast.info(message)
        break;
    case 'loading':
        toast.dismiss();
        toast.loading( message)
        break;
    case 'success':
        toast.dismiss();
        toast.success(message)
        break;
    default:
        break;
  }


}

export const throwError = (error) => {
    return error.data && flashMessage("error", error.data.msg)
}

// export default flashMessage