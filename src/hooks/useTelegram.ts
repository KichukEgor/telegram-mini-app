export function useTelegram() {
  // @ts-ignore
  const tg = window.Telegram.WebApp;

  if (!tg) {
    throw new Error('Telegram WebApp API is not available.');
  }

  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
    lang: tg.initDataUnsafe?.user?.language_code,
  };
}
