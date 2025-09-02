'use client';

import { useState, useEffect } from 'react';
import { Download, X, Bell } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Detectar si ya está instalada
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Listener para el evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    // Listener para cuando la app se instala
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Mostrar prompt de notificaciones después de 3 segundos si no está instalada
    const timer = setTimeout(() => {
      if (!isInstalled && 'Notification' in window && Notification.permission === 'default') {
        setShowNotificationPrompt(true);
      }
    }, 3000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      clearTimeout(timer);
    };
  }, [isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        // Enviar notificación de bienvenida
        new Notification('¡Bienvenido a Ceremonias de Rapé!', {
          body: 'Ahora recibirás notificaciones sobre nuevos productos y ceremonias.',
          icon: '/icons/icon-192x192.png',
          badge: '/icons/icon-72x72.png'
        });
      }
    }
    setShowNotificationPrompt(false);
  };

  if (isInstalled) {
    return null; // No mostrar nada si ya está instalada
  }

  return (
    <>
      {/* Install Prompt */}
      {showInstallPrompt && (
        <div className="install-prompt">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span className="font-medium">Instalar App</span>
            </div>
            <button 
              onClick={() => setShowInstallPrompt(false)}
              className="text-amber-200 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-amber-100 mb-4">
            Instala nuestra app para acceso rápido y recibir notificaciones sobre nuevos productos y ceremonias.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={handleInstallClick}
              className="bg-white text-amber-800 px-4 py-2 rounded-lg font-medium text-sm hover:bg-amber-50 transition-colors"
            >
              Instalar
            </button>
            <button
              onClick={() => setShowInstallPrompt(false)}
              className="text-amber-200 hover:text-white text-sm"
            >
              Ahora no
            </button>
          </div>
        </div>
      )}

      {/* Notification Permission Prompt */}
      {showNotificationPrompt && (
        <div className="install-prompt">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span className="font-medium">Notificaciones</span>
            </div>
            <button 
              onClick={() => setShowNotificationPrompt(false)}
              className="text-amber-200 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-amber-100 mb-4">
            Permite notificaciones para estar al día con nuevos productos y ceremonias.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={handleNotificationPermission}
              className="bg-white text-amber-800 px-4 py-2 rounded-lg font-medium text-sm hover:bg-amber-50 transition-colors"
            >
              Permitir
            </button>
            <button
              onClick={() => setShowNotificationPrompt(false)}
              className="text-amber-200 hover:text-white text-sm"
            >
              No gracias
            </button>
          </div>
        </div>
      )}
    </>
  );
}
