import React, { useState, useEffect } from 'react';
import { Watch, Smartphone, Activity } from 'lucide-react';

interface DeviceSyncProps {
  onCaloriesUpdate: (calories: number) => void;
}

export function DeviceSync({ onCaloriesUpdate }: DeviceSyncProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceType, setDeviceType] = useState<'watch' | 'phone' | null>(null);
  const [calories, setCalories] = useState(0);

  // Simulate device connection and calorie tracking
  useEffect(() => {
    if (isConnected) {
      const interval = setInterval(() => {
        const newCalories = Math.floor(Math.random() * 10) + 1;
        setCalories(prev => {
          const updated = prev + newCalories;
          onCaloriesUpdate(updated);
          return updated;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isConnected, onCaloriesUpdate]);

  const handleConnect = (type: 'watch' | 'phone') => {
    setIsConnected(true);
    setDeviceType(type);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Device Sync
      </h3>
      
      {!isConnected ? (
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleConnect('watch')}
            className="flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <Watch className="w-6 h-6" />
            <span>Connect Smart Watch</span>
          </button>
          
          <button
            onClick={() => handleConnect('phone')}
            className="flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <Smartphone className="w-6 h-6" />
            <span>Connect Phone</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {deviceType === 'watch' ? (
              <Watch className="w-6 h-6 text-green-500" />
            ) : (
              <Smartphone className="w-6 h-6 text-green-500" />
            )}
            <span className="text-green-500">Connected</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Activity className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-semibold">{calories} calories burned</span>
          </div>
          
          <button
            onClick={() => {
              setIsConnected(false);
              setDeviceType(null);
            }}
            className="text-red-500 hover:text-red-600"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}