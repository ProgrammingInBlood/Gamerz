import { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface MenuItem {
  label: string;
  onPress: () => void;
  icon?: string;
  destructive?: boolean;
}

interface MenuProps {
  trigger: React.ReactNode;
  items: MenuItem[];
}

export function Menu({ trigger, items }: MenuProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        {trigger}
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType='fade'
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.menuContainer}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  item.onPress();
                  setVisible(false);
                }}
              >
                {item.icon && (
                  <Ionicons
                    name={item.icon as any}
                    size={20}
                    color={item.destructive ? Colors.error : Colors.text}
                    style={styles.menuIcon}
                  />
                )}
                <Text
                  style={[
                    styles.menuText,
                    item.destructive && styles.destructiveText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: Colors.text,
  },
  destructiveText: {
    color: Colors.error,
  },
});
