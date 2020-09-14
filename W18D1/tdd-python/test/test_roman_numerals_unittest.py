import unittest
from app.roman_numerals import parse

class TestRomanNumerals(unittest.TestCase):
    def test_i(self):
        value = parse("I")

        self.assertEqual(value, 1)

    def test_ii(self):
        value2 = parse("II")

        self.assertEqual(value2, 2)

    def test_iii(self):
        value = parse("III")

        self.assertEqual(value, 3)

    def test_iv(self):
        value2 = parse("IV")

        self.assertEqual(value2, 4)

    def test_v(self):
        value = parse("V")

        self.assertEqual(value, 5)

    def test_vi(self):
        value2 = parse("VI")

        self.assertEqual(value2, 6)

    def test_vii(self):
        value = parse("VII")

        self.assertEqual(value, 7)

    def test_viii(self):
        value8 = parse("VIII")

        self.assertEqual(value8, 8)

    def test_x(self):
        value = parse("X")

        self.assertEqual(value, 10)


    def test_xiv(self):
      value = parse('XIV')

      self.assertEqual(value, 14)

    def test_xli(self):
        value = parse("XLI")

        self.assertEqual(value, 41)

    def test_l(self):
      value = parse('L')

      self.assertEqual(value, 50)

    def test_cccxxxiii(self):
        value = parse("CCCXXXIII")

        self.assertEqual(value, 333)


    def test_dlv(self):
      value = parse('DLV')

      self.assertEqual(value, 555)

    def test_CDXLIX(self):
      value = parse('CDXLIX')

      self.assertEqual(value, 449)

    def test_mcmlxxii(self):
      value = parse('MCMLXXII')

      self.assertEqual(value, 1972)
