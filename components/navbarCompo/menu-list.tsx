'use client'

import Link from 'next/link'
import { forwardRef } from 'react'

interface MenuItemProps {
  title: string
  url: string
  isActive?: boolean
}

const menuItems: MenuItemProps[] = [
  {
    title: 'Home',
    url: '/',
    isActive: true,
  },
  {
    title: 'About',
    url: '#about',
  },
  {
    title: 'Services',
    url: '#services',
  },
  {
    title: 'Portfolio',
    url: '#portfolio',
  },
  {
    title: 'Testimonials',
    url: '#testimonials',
  },
  {
    title: 'Blog',
    url: '#blog',
  },
  {
    title: 'FAQ',
    url: '#faq',
  },
  {
    title: 'Contact',
    url: '#cta',
  },
]

interface MenuListProps {
  onItemClick?: () => void
}

export const MenuList = forwardRef<HTMLUListElement, MenuListProps>((props, ref) => {
  const { onItemClick } = props

  return (
    <ul ref={ref} className="menu-list">
      {menuItems.map((item) => (
        <li key={item.title} className="menu-list-item menu-list-item-anchor">
          {item.url.startsWith('#') ? (
            <a
              href={item.url}
              onClick={() => {
                onItemClick && onItemClick()
                // Smooth scroll to section
                const element = document.querySelector(item.url)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="menu-list-item-text text-[24px] leading-[50px] text-white md:text-[32px] md:leading-[55px] xl:text-[40px] xl:leading-[60px]">
              {item.title}
            </a>
          ) : (
            <Link
              href={item.url}
              onClick={() => {
                onItemClick && onItemClick()
              }}
              className="menu-list-item-text text-[24px] leading-[50px] text-white md:text-[32px] md:leading-[55px] xl:text-[40px] xl:leading-[60px]">
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
})

MenuList.displayName = 'MenuList'
