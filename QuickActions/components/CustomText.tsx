import { useEffect } from 'react';
import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as QuickActions from 'expo-quick-actions';

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    // Configura as ações rápidas
    QuickActions.setItems([
      { id: 'home', title: 'Abrir Home', subtitle: 'Ir para a tela inicial', icon: 'home' },
      { id: 'tela1', title: 'Abrir Tela 1', subtitle: 'Ver conteúdo da tela 1', icon: 'albums' },
      { id: 'tela2', title: 'Abrir Tela 2', subtitle: 'Ver conteúdo da tela 2', icon: 'settings' },
    ]);

    const subscription = QuickActions.addListener(action => {
      if (action.id === 'home') router.push('/');
      else if (action.id === 'tela1') router.push('/tela1');
      else if (action.id === 'tela2') router.push('/tela2');
    });

    return () => subscription.remove();
  }, []);

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="tela1"
        options={{ title: 'Tela 1', tabBarIcon: ({ color, size }) => <Ionicons name="albums" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="tela2"
        options={{ title: 'Tela 2', tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} /> }}
      />
    </Tabs>
  );
}
